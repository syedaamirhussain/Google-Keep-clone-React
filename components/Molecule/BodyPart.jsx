"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import BodyIcons from "../Atom/BodyIcons";
import Icons from "../Atom/Icons";
// import InputAtom from "../Atom/InputAtom";
// import BodyIcons from "../Atom/BodyIcons";
import Pin from "../../public/svg/pushpin.svg";
import Reminder from "../../public/svg/person.svg";
import AddCollab from "../../public/svg/add.svg";
import Drawing from "../../public/svg/palette_.svg";
import Pic from "../../public/svg/image.svg";
import archive from "../../public/svg/archive.svg";
import More from "../../public/svg/more.svg";
import Undo from "../../public/svg/undo.svg";
import Redo from "../../public/svg/redo.svg";
import Brush from "../../public/svg/brush.svg";
import CheckBox from "../../public/svg/checkBox.svg";
import Delete from "../../public/svg/delete.svg";
import { collection, addDoc,db,deleteDoc,doc} from "../../firebase/firebaseConfig";
import { UserContext } from "@/Context/UserContext";
import { useRouter } from "next/router";

const BodyPart = () => {
  const router=useRouter();
  const {users,notes} = useContext(UserContext)
  const [initial, setInital] = useState(false);
  const [textInput, setTextInput] = useState({title:'', text:''});
  const [localStorgeData, setLocalStorageData] = useState([]);
  

  const initialState = () => {
    setInital(true);
  };

  // useEffect(()=>{
  //   const storageData = JSON.parse(localStorage.getItem('cardData')) || []
  //   setLocalStorageData(storageData)
  // }, [])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTextInput({...textInput, [name]: value})
 
  };
 console.log(users);
  const addToLocalStorage = () => {
    if (textInput.title && textInput.text) {
      // const newArray = [...localStorgeData, textInput]
      // setLocalStorageData(newArray)
      // console.log("ARRAY: ", newArray)
      // localStorage.setItem("cardData", JSON.stringify(newArray))
      if(users){
      addDoc(collection(db,'notes'),{...textInput,ownId:users.uid})
    }
    else{
      router.push('signup');
      alert('please log in')    }
      setTextInput({title: '', text: ''});
    }
  };
  const deleteNote =async (id) => {
    // const deletedArray = localStorgeData.filter((e,i) => i!==index);
    // setLocalStorageData(deletedArray);
    // localStorage.setItem("cardData", JSON.stringify(deletedArray));
    // console.log(localStorage)
    await deleteDoc(doc(db,'notes',id))
  };
  



  return (
    <>
      <div className="c">
        <div className="body-innerpart">
          {initial && (
            <div className="body-first-input">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={textInput.title}
                onChange={handleChange}
              />
              <Image className="pin-icon" src={Pin}  alt="pinPic"/>
            </div>
          )}
          <div className="second-input-parent">
            <div className="second-input">
              <input
                type="text"
                placeholder="Text a note"
                name="text"
                value={textInput.text}
                onChange={handleChange}
                onClick={initialState}
              />
            </div>
            {initial || (
              <div className="second-input-images">
                <Icons photos={CheckBox} />
                <Icons photos={Brush} />
                <Icons photos={Pic} />
              </div>
            )}
          </div>

          {initial && (
            <div className="bodyicons-part">
              <div className="pics">
                <BodyIcons Bodyicons={AddCollab} />
                <BodyIcons Bodyicons={Reminder} />
                <BodyIcons Bodyicons={Drawing} />
                <BodyIcons Bodyicons={Pic} />
                <BodyIcons Bodyicons={archive} />
                <BodyIcons Bodyicons={More} />
                <BodyIcons Bodyicons={Undo} />
                <BodyIcons Bodyicons={Redo} />
              </div>
              <button onClick={addToLocalStorage}>Add</button>
            </div>
          )}
        </div>
      </div>
      <div className="notes">
        {notes.map((singleNote,index) => (
          <div className="note-list" key={index}>
            <h3>{singleNote.title}</h3>
            <p>{singleNote.text}</p>
            <div className="imagesLower">
              <BodyIcons Bodyicons={AddCollab} />
              <BodyIcons Bodyicons={Reminder} />
              <BodyIcons Bodyicons={Drawing} />
              <BodyIcons Bodyicons={Pic} />
              <BodyIcons Bodyicons={archive} />
              <BodyIcons Bodyicons={More} />
              <BodyIcons Bodyicons={Delete} onClick={() => deleteNote(singleNote.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BodyPart;
