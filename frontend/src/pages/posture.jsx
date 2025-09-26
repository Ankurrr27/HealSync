import React, { useState, useRef, useEffect } from 'react';
import { Camera, AlertCircle, CheckCircle, Loader, XCircle } from 'lucide-react';

// A reusable modal component for displaying messages
const MessageModal = ({ message, onClose, isError }) => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm w-full relative transform transition-transform duration-300 scale-100">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                <XCircle size={24} />
            </button>
            <div className={`flex items-center justify-center mb-4 ${isError ? 'text-red-500' : 'text-blue-500'}`}>
                {isError ? <AlertCircle size={48} /> : <CheckCircle size={48} />}
            </div>
            <p className="text-center text-lg font-semibold text-gray-800">{message}</p>
            <div className="text-center mt-6">
                <button
                    onClick={onClose}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                >
                    Dismiss
                </button>
            </div>
        </div>
    </div>
);

export default function App() {
    const [exerciseName, setExerciseName] = useState('');
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [feedback, setFeedback] = useState('Enter an exercise name to begin.');
    const [isFeedbackGood, setIsFeedbackGood] = useState(null);
    const [isStarting, setIsStarting] = useState(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const feedbackIntervalRef = useRef(null);
    const [modalMessage, setModalMessage] = useState(null);
    const [isModalError, setIsModalError] = useState(false);
    const [isKnownExercise, setIsKnownExercise] = useState(false);

    // Pre-defined feedback for demonstration
    const feedbackOptions = {
        'plank': [
            { text: 'Keep your back straight, like a board!', isGood: true },
            { text: 'Your hips are sagging a bit. Lift them up!', isGood: false },
            { text: 'Nice! Your core is engaged and strong.', isGood: true },
            { text: 'Your shoulders are not aligned. Move them over your hands.', isGood: false },
        ],
        'warrior ii': [
            { text: 'Excellent front knee alignment. Keep it at a 90-degree angle.', isGood: true },
            { text: 'Straighten your back leg and engage your thigh.', isGood: true },
            { text: 'Your hips are not open enough. Try to face the side.', isGood: false },
            { text: 'Relax your shoulders and broaden your chest.', isGood: true },
            { text: 'You are leaning too far forward. Lean back slightly.', isGood: false },
        ],
        'mountain pose': [
            { text: 'Your posture is tall and majestic, well done!', isGood: true },
            { text: 'Shoulders are a little hunched. Roll them back and down.', isGood: false },
            { text: 'Engage your core and stand with purpose.', isGood: true },
            { text: 'Your weight is shifted. Distribute it evenly across your feet.', isGood: false },
        ],
        'default': [
            { text: 'Posture looks good!', isGood: true },
            { text: 'Try to straighten your back.', isGood: false },
            { text: 'Keep your shoulders relaxed and pulled back.', isGood: true },
            { text: 'Your posture can be improved. Focus on core engagement.', isGood: false },
        ]
    };

    const getFeedback = () => {
        const lowerCaseName = exerciseName.toLowerCase().trim();
        const options = feedbackOptions[lowerCaseName] || feedbackOptions['default'];
        const randomFeedback = options[Math.floor(Math.random() * options.length)];
        setFeedback(randomFeedback.text);
        setIsFeedbackGood(randomFeedback.isGood);
    };

    const startVideo = async () => {
        if (isCameraActive) {
            // Stop the stream
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
            clearInterval(feedbackIntervalRef.current);
            setIsCameraActive(false);
            setFeedback('Video stopped.');
            setIsFeedbackGood(null);
        } else {
            if (!exerciseName.trim()) {
                setIsModalError(true);
                setModalMessage('Please enter an exercise or asana name first.');
                return;
            }
            setIsStarting(true);
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setIsCameraActive(true);
                const isKnown = !!feedbackOptions[exerciseName.toLowerCase().trim()];
                setIsKnownExercise(isKnown);
                setFeedback('Checking your posture...');
                setIsFeedbackGood(null);
                
                if (!isKnown) {
                    setIsModalError(false);
                    setModalMessage(`We don't have specific guidance for "${exerciseName}". Providing general posture feedback.`);
                }
                
                // Simulate live feedback every few seconds
                feedbackIntervalRef.current = setInterval(getFeedback, 5000);
            } catch (err) {
                console.error("Error accessing the camera: ", err);
                setIsModalError(true);
                setModalMessage('Error accessing camera. Please ensure you have given permission and try again.');
                setIsCameraActive(false);
            } finally {
                setIsStarting(false);
            }
        }
    };

    const handleCloseModal = () => {
        setModalMessage(null);
    };

    // Cleanup function when component unmounts
    useEffect(() => {
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
            if (feedbackIntervalRef.current) {
                clearInterval(feedbackIntervalRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-140 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 font-sans m-0 p-0">
            {modalMessage && <MessageModal message={modalMessage} onClose={handleCloseModal} isError={isModalError} />}
            <div className="w-full bg-white rounded-3xl shadow-2xl p-6 ">
                <div className="text-center mb-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-sm">
                        <span className="text-black">Posture</span>
                        <span className="text-blue-600"> Corrector</span>
                    </h1>
                    <p className="text-lg text-gray-600">Enter an exercise and get live feedback on your form.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left side: Video Feed */}
                    <div 
                        className={`relative w-full md:w-2/3 aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 transition-colors duration-500 transform ${isCameraActive ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}`}
                        style={{ borderColor: isFeedbackGood === true ? 'rgb(34,197,94)' : isFeedbackGood === false ? 'rgb(239,68,68)' : 'transparent' }}
                    >
                        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover rounded-xl"></video>
                        {!isCameraActive && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                                <Camera size={80} strokeWidth={1} />
                                <p className="mt-4 text-center">Your camera feed will appear here.</p>
                            </div>
                        )}
                    </div>
                    
                    {/* Right side: Controls & Feedback */}
                    <div className="w-full md:w-1/3 flex flex-col space-y-4">
                        <div className="w-full">
                            <label htmlFor="exerciseName" className="block text-sm font-semibold text-gray-700 mb-1">
                                Exercise/Asana Name
                            </label>
                            <input
                                type="text"
                                id="exerciseName"
                                value={exerciseName}
                                onChange={(e) => setExerciseName(e.target.value)}
                                placeholder="e.g., Plank, Warrior II, Mountain Pose"
                                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            />
                        </div>
                        
                        <button
                            onClick={startVideo}
                            disabled={isStarting}
                            className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 transform shadow-lg
                            ${isStarting ? 'bg-gray-400 cursor-not-allowed' : isCameraActive ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}
                            text-white flex items-center justify-center space-x-2`}
                        >
                            {isStarting && <Loader className="animate-spin" size={20} />}
                            {isStarting ? 'Starting...' : isCameraActive ? 'Stop Video' : 'Start Video'}
                        </button>
                        
                        <div className="w-full text-center p-6 bg-white rounded-2xl shadow-md border-t-8 border-blue-500">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                {isFeedbackGood === true && <CheckCircle className="text-green-500 animate-pop" size={32} />}
                                {isFeedbackGood === false && <AlertCircle className="text-red-500 animate-pop" size={32} />}
                                <p className="text-xl font-bold">{feedback}</p>
                            </div>
                            {isCameraActive && (
                                <p className="text-sm text-gray-500">
                                    {isKnownExercise ? `Providing tailored feedback for "${exerciseName}".` : `Using general feedback since "${exerciseName}" is not a recognized exercise.`}
                                </p>
                            )}
                             <p className="text-sm text-gray-500 mt-2">
                                Note: For this demonstration, the feedback is simulated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0; }
                    10%, 90% { opacity: 1; }
                }
                .animate-fadeInOut {
                    animation: fadeInOut 3s ease-in-out forwards;
                }
                @keyframes pop {
                    0% { transform: scale(0.8); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                .animate-pop {
                    animation: pop 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}