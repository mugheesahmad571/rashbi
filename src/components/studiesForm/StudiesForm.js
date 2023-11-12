import React from 'react'
import "./StudiesForm.css";
import { Label, Input, Button, Textarea } from "../index"

export default function StudiesForm() {
    const [type, setType] = React.useState("text");
    function focus() {
        setType("date")
    }

    const [fileName, setFileName] = React.useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFileName('Selected File: ' + selectedFile.name);
        } else {
            setFileName('');
        }
    };

    return (
        <div className='selfContainer bg-form '>
            <div className='row align-items-center justify-content-center '>
                <div className='col-lg-10 my-2'>
                    <h3 className='mt-2 text-end fwt-600 poppins formHeading'>
                        לימודים יומיים
                    </h3>
                </div>
                <div className='col-lg-10 card studiesCard'>
                    <div className='row justify-content-between align-items-center px-3 mt-4'>
                        <div className='col-lg-5 '>
                            <div className='row justify-content-between'>
                                <div className='col-lg-6'>
                                    <Input type={type} placeholder="בחר תאריך" inputClass={"text-end datePicker p-3 mx-2 w-100"} id={"myDate"} onFocus={focus} />
                                    <p className='custom-date-input ' onClick={focus}></p>
                                </div>
                                <Label title=":הוסף עוד" parentalClass="col-lg-6" labelClass={"datePickerLabel fwt-700"} />
                            </div>
                        </div>
                        <div className='col-lg-3 text-end'>
                            <h3 className='mt-2 text-end formHeading'>
                                טופס לימודים יומיים
                            </h3>
                        </div>
                    </div>
                    <div className='row justify-content-end mt-4 px-3'>
                        <Textarea rows={5} parentalClass={"col-lg-9 mt-3"} textareaClass={"textArea p-2"} />
                        <Label title=":תוכן לימוד" parentalClass={"col-lg-1 mt-3 text-end"} labelClass={"txtAreaLabel"} style={{ width: "11%" }} />
                    </div>
                    <div className='row justify-content-end mt-2 px-3 bgCardImg'>
                        <Input parentalClass={"col-lg-3"} inputClass={"txt w-100 p-2"} type={"text"} />
                        <Label title=":שם קובץ" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "11%" }} />
                        <div className='col-lg-12 mt-2'>
                            <div className='row justify-content-end'>
                                <div className='col-lg-3'>
                                    <Label htmlFor="fileInput" labelClass={"fileName w-100 p-5 fwt-600"} title={!fileName ? "העלאת תמונה +" : fileName} />
                                    <Input type="file" id="fileInput" name="fileInput" onChange={handleFileChange} style={{ display: "none" }} />
                                </div>
                                <Label title=":הוסף כיסוי" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "11%" }} />
                            </div>
                        </div>
                        <div className='col-lg-11 text-center my-5'>
                            <div className='row justify-content-center'>
                                <Button title="PDF להעלות" ParentClass={"col-lg-5 me-3 text-end"} buttonClass={"formBtn px-3 py-2"} />
                                <Button title="העלה קובץ" ParentClass={"col-lg-5 ms-3 text-start"} buttonClass={"formBtn px-3 py-2"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
