const divDropzone = document.querySelector(".dropzone")

divDropzone.addEventListener("dragover", (ev) => {
  // prevented dass File nicht gedropped werden kann (=aktiviert drop event)
  ev.preventDefault()
  console.log("Hier wird was über mich gedragged....")
})

divDropzone.addEventListener("drop", (ev) => {
  // prevented den default, dass FILE im Browser geöffnet wird!
  ev.preventDefault();
  console.log("Gedropped!");

  // JSDoc Type annotation => so bekommen wir AUTOCOMPLETION für Browser Objekte, wie etwa File
  /** @type {File} */
  const file = ev.dataTransfer.files[0];

  // error handlers
  if (!file.type.startsWith("image")) {
    alert("Kein Bild! Hau ab!");
    return;
  }

  // get file preview
  const imageUrl = URL.createObjectURL(file);
  console.log(imageUrl);

  // create image from URL
  const image = new Image();
  image.src = dataUrl;

  // clear old content from container
  divDropzone.innerHTML = "";

  // append image object into container
  divDropzone.appendChild(image);

  // ALTERNATIVE: read image as string
  // use filereader class to READ FILE CONTENT
  // const fileReader = new FileReader();
  // fileReader.readAsDataURL(file);

  // when file parsing is finished => execute onloadend
  // fileReader.onloadend = () => {
  //   const dataUrl = fileReader.result;
  //   console.log(dataUrl);
  //   // create image from URL
  //   const image = new Image();
  //   image.src = dataUrl;

  //   // clear old content from container
  //   divDropzone.innerHTML = "";

  //   // append image object into container
  //   divDropzone.appendChild(image);
  // };

  // send file to some backend using fetch (will follow)
  // fetch("url", {

  // })
})