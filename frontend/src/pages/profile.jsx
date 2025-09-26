import React, { useState } from 'react';

// --- MOCK DATA (Indianized) ---
const patientData = {
    id: 'PNT-IN-4820',
    name: 'Ankur Singh',
    dob: '2005-05-27',
    age: 20,
    gender: 'Male',
    bloodType: 'O+',
    allergies: ['Dust', 'Seasonal Pollen'],
    primaryCarePhysician: 'Dr. Rahul Sharma',
    phone: '+91 9893356278',
    email: 'ankurp22singh@gmail.com',
    address: '147 A , Maa Bhagwati Vihar Colony , Mhow , Indore ',
    
    // Health Summary
    vitals: {
        lastCheckup: '2025-09-15',
        weight: '78 kg',
        height: "5'9\"",
        bloodPressure: '125/85 mmHg',
        pulse: '76 bpm',
    },
    conditions: [
        { name: 'Occasional Acidity', status: 'Mild' },
        { name: 'Vitamin D Deficiency', status: 'On Supplementation' },
    ],

    // Recent Records (These usually aren't directly editable by the patient, so they remain static)
    recentRecords: [
        { date: '2025-09-20', type: 'Pathology Report', title: 'Complete Blood Count (CBC)', link: '#' },
        { date: '2025-08-10', type: 'Prescription', title: 'Amlodipine Refill (BP)', link: '#' },
        { date: '2025-06-25', type: 'Radiology', title: 'Spine MRI Scan', link: '#' },
    ],

    // Consultation History (Static for history)
    consultationHistory: [
        { date: '2025-09-22', doctor: 'Dr. Sharma (PCP)', reason: 'Seasonal Flu Symptoms', status: 'Completed' },
        { date: '2025-08-01', doctor: 'Dr. Vivek Jain (Ortho)', reason: 'Knee Pain Follow-up', status: 'Completed' },
        { date: '2025-10-10', doctor: 'Dr. Sharma (PCP)', reason: 'Routine Annual Review', status: 'Scheduled' },
    ],
};

// --- HELPER COMPONENTS ---

// Card component (Reverts border color to blue for consistency)
const ProfileCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500/80">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h3>
        {children}
    </div>
);

// NEW: Editable Detail Item component
const EditableDetailItem = ({ label, initialValue, isEditable, color = 'text-gray-900', onSave }) => {
    const [value, setValue] = useState(initialValue);
    
    // Function to handle saving (in a real app, this would call an API)
    const handleSave = () => {
        // console.log(`Saving ${label}: ${value}`);
        // Call the parent handler to update the main state/context if needed
        if (onSave) onSave(label, value); 
    };

    return (
        <div className="flex justify-between items-center py-2 border-b last:border-b-0">
            <span className="text-sm font-medium text-gray-500">{label}</span>
            {isEditable ? (
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={handleSave} // Save when the input loses focus
                        className="text-sm font-semibold text-right p-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 transition-all"
                    />
                </div>
            ) : (
                <span className={`text-sm font-semibold ${color} text-right`}>
                    {value}
                </span>
            )}
        </div>
    );
};


// --- MAIN COMPONENT ---

const PatientProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    // Use state to hold editable data
    const [profileData, setProfileData] = useState(patientData);

    const handleDataSave = (label, newValue) => {
        // Simple logic to map label to data path for personal info/vitals
        const fieldMap = {
            'Mobile Number': 'phone',
            'Email ID': 'email',
            'Current Address': 'address',
            'Weight': 'vitals.weight',
            'Blood Pressure (BP)': 'vitals.bloodPressure',
            'Pulse Rate': 'vitals.pulse',
            // ... add more mappings as needed
        };

        const field = fieldMap[label];

        if (field) {
            // This is a simple deep copy for demonstration; a library like Lodash/immer is better for complex state management
            const newData = { ...profileData };

            if (field.includes('.')) {
                const [section, key] = field.split('.');
                newData[section][key] = newValue;
            } else {
                newData[field] = newValue;
            }
            
            setProfileData(newData);
            // In a real app, API call to save would happen here
        }
    };

    const allergiesString = profileData.allergies.length > 0
        ? profileData.allergies.join(', ')
        : 'None';

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header and Edit Button */}
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-blue-500 text-white rounded-xl shadow-xl">
                    <div className='flex items-center space-x-4'>
                        <span className="text-5xl">🇮🇳</span>
                        <div>
                            <h1 className="text-3xl font-extrabold">{profileData.name}</h1>
                            <p className="text-blue-200">Patient ID: {profileData.id}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsEditing(!isEditing)}
                        className={`mt-4 sm:mt-0 px-6 py-2 rounded-full font-semibold transition-colors shadow-md 
                            ${isEditing 
                                ? 'bg-red-500 text-white hover:bg-red-600' 
                                : 'bg-white text-blue-600 hover:bg-blue-100'
                            }`}
                    >
                        {isEditing ? 'Exit Edit Mode' : 'Edit Profile'}
                    </button>
                </div>
                
                {/* Grid Layout for Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column (Personal Info & Vitals) */}
                    <div className="lg:col-span-1 space-y-8">
                        
                        {/* 1. Personal Information */}
                        <ProfileCard title="Personal & Contact Info">
                            {/* Static Fields (Not editable by patient, requires admin change or complex UI) */}
                            <EditableDetailItem label="Date of Birth" initialValue={profileData.dob} isEditable={false} />
                            <EditableDetailItem label="Age" initialValue={`${profileData.age} years`} isEditable={false} />
                            <EditableDetailItem label="Gender" initialValue={profileData.gender} isEditable={false} />
                            <EditableDetailItem label="Blood Group" initialValue={profileData.bloodType} isEditable={false} color="text-red-600" />
                            <EditableDetailItem label="Primary Doctor" initialValue={profileData.primaryCarePhysician} isEditable={false} />

                            {/* Editable Contact Fields */}
                            <EditableDetailItem label="Mobile Number" initialValue={profileData.phone} isEditable={isEditing} onSave={handleDataSave} />
                            <EditableDetailItem label="Email ID" initialValue={profileData.email} isEditable={isEditing} onSave={handleDataSave} />
                            <EditableDetailItem label="Current Address" initialValue={profileData.address} isEditable={isEditing} onSave={handleDataSave} />
                        </ProfileCard>
                        
                        {/* 2. Key Vitals & Allergies */}
                        <ProfileCard title="Clinical Vitals & Alerts">
                            {/* Static Fields */}
                            <EditableDetailItem label="Last Checkup Date" initialValue={profileData.vitals.lastCheckup} isEditable={false} />
                            
                            {/* Editable Vitals (for self-entry/tracking) */}
                            <EditableDetailItem label="Blood Pressure (BP)" initialValue={profileData.vitals.bloodPressure} isEditable={isEditing} onSave={handleDataSave} />
                            <EditableDetailItem label="Pulse Rate" initialValue={profileData.vitals.pulse} isEditable={isEditing} onSave={handleDataSave} />
                            <EditableDetailItem label="Weight" initialValue={profileData.vitals.weight} isEditable={isEditing} onSave={handleDataSave} />
                            <EditableDetailItem label="Height" initialValue={profileData.vitals.height} isEditable={isEditing} onSave={handleDataSave} />
                            
                            {/* Allergies are often a multi-select, complex edit, so we'll keep it simple for now */}
                            <EditableDetailItem 
                                label="Known Allergies" 
                                initialValue={allergiesString} 
                                isEditable={isEditing} // Allow user to update allergy list string
                                color={profileData.allergies.length > 0 ? 'text-orange-600 font-bold' : 'text-green-600'}
                                onSave={handleDataSave}
                            />
                        </ProfileCard>

                    </div>

                    {/* Right Column (Conditions, Records & Consultations) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 3. Health Conditions (Kept static, as diagnoses are doctor-verified) */}
                        <ProfileCard title="Active Health Concerns">
                            <div className="flex flex-wrap gap-4">
                                {profileData.conditions.map((condition, index) => (
                                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                                        {condition.name} ({condition.status})
                                    </span>
                                ))}
                                {profileData.conditions.length === 0 && (
                                    <p className="text-gray-500 italic">No major chronic conditions listed.</p>
                                )}
                            </div>
                        </ProfileCard>

                        {/* 4. Recent Medical Records (Kept static) */}
                        <ProfileCard title="Recent Medical Records">
                            <div className="space-y-3">
                                {profileData.recentRecords.map((record, index) => (
                                    <a 
                                        key={index} 
                                        href={record.link} 
                                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <div>
                                            <p className="font-semibold text-gray-900">{record.title}</p>
                                            <p className="text-xs text-gray-500">{record.type} · {record.date}</p>
                                        </div>
                                        <span className="text-blue-600 font-medium text-sm">Download/View →</span>
                                    </a>
                                ))}
                            </div>
                        </ProfileCard>

                        {/* 5. Consultation History (Kept static) */}
                        <ProfileCard title="Doctor Consultation History">
                            <ul className="space-y-3">
                                {profileData.consultationHistory.map((consult, index) => (
                                    <li 
                                        key={index} 
                                        className={`flex justify-between items-center p-3 rounded-lg ${
                                            consult.status === 'Scheduled' 
                                            ? 'bg-blue-50 border-l-4 border-blue-400' 
                                            : 'bg-green-50 border-l-4 border-green-400'
                                        }`}
                                    >
                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                {consult.date}: {consult.doctor}
                                            </p>
                                            <p className="text-sm text-gray-600">{consult.reason}</p>
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                                            consult.status === 'Scheduled' 
                                            ? 'bg-blue-200 text-blue-800' 
                                            : 'bg-green-200 text-green-800'
                                        }`}>
                                            {consult.status}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ProfileCard>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;