const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// Click event listener
addBtn.addEventListener("click", function () {
    addNote();
});

// Save button function
const saveNotes = () => {
    // Select content textareas
    const notes = document.querySelectorAll(".note .content");

    // Select title textareas
    const titles = document.querySelectorAll(".note .title");

    const data = [];

    notes.forEach((note, index) => {
        const content = note.value;
        const title = titles[index].value;
        if (content.trim() !== "" || title.trim() !== "") {
            data.push({ title, content });
        }
    });

    localStorage.setItem("notesData", JSON.stringify(data));
};

// Add note button function
const addNote = (text = "", title = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="icons">
            <i class="save fas fa-save" style="color:red"></i>
            <i class="trash fas fa-trash" style="color:yellow"></i>
        </div>
        <div class="title-div">
            <textarea class="title" placeholder="Write the title ...">${title}</textarea>
        </div>
        <textarea class="content" placeholder="Note down your thoughts ...">${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener("click", () => {
        note.remove();
        saveNotes();
    });

    note.querySelector(".save").addEventListener("click", saveNotes);

    main.appendChild(note);
    saveNotes();
};

// Load all the notes saved in the local storage
const loadNotes = () => {
    const data = JSON.parse(localStorage.getItem("notesData")) || [];

    data.forEach(note => {
        addNote(note.content, note.title);
    });
};

loadNotes();
