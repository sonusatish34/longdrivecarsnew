import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';

export const MyEditor = () => {
    const [editorData, setEditorData] = useState('');

    const handleChange = (event) => {
        setEditorData(event.editor.getData());
    };

    const handleSave = () => {
        console.log('Saved Data: ', editorData);
        // You can handle the save logic here, e.g., send to an API
    };

    return (
        <div>
            <h2>CKEditor 4 Example</h2>
            <CKEditor
                data={editorData}
                onChange={handleChange}
                config={{
                    // You can customize the editor configuration here
                    toolbar: [
                        { name: 'basicstyles', items: ['Bold', 'Italic'] },
                        { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
                        { name: 'insert', items: ['Image', 'Table'] },
                    ],
                }}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

