// Append css file to head content

function donate(url) {
  cancel();
  window.open(url);
}

function cancel() {
  document.getElementById("charity_bh").remove();
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

function attachScript(src) {
  const head = document.getElementsByTagName("head")[0];

  const script = document.createElement("script");
  script.src = src;
  head.appendChild(script);
}

attachScript("https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js");
attachScript("https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js");

window.onload = async function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const cssLink =
    "https://firebasestorage.googleapis.com/v0/b/charitybh-dc293.appspot.com/o/files%2Foverlay.css?alt=media&token=38c9c105-5b0c-429e-a3ec-73fb41bbcc7a";
  const head = document.getElementsByTagName("head")[0];

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = cssLink;
  link.media = "all";
  head.appendChild(link);

  const config = {
    apiKey: "AIzaSyCAEDC0IPBG6wq2OXUHxR6gnDh0SvXDlHI",
    authDomain: "charitybh-dc293.firebaseapp.com",
    projectId: "charitybh-dc293",
    storageBucket: "charitybh-dc293.appspot.com",
    messagingSenderId: "620921666149",
    appId: "1:620921666149:web:8546090aad1c06890ae48c",
    measurementId: "G-ZVCBNERB1T",
  };
  const firebaseApp = firebase.initializeApp(config);
  const fstore = firebaseApp.firestore();

  const ids = [];
  const idsSnapshot = await fstore.collection("charities_ids").get();
  idsSnapshot.docs.forEach((id) => {
    ids.push(id.id);
  });

  randomIndex = Math.floor(Math.random() * (ids.length - 1 - 0 + 1) + 0);
  id = ids[randomIndex];

  fstore
    .collection("charities")
    .doc(id)
    .get()
    .then((snapshot) => {
      const { url, name, description, website } = snapshot.data();

      const body = document.getElementsByTagName("body")[0];
      body.innerHTML += `
  <div id="charity_bh">
      <div id="cross_bh" onclick="cancel()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 329.27 329.263"
        >
          <path
            id="close"
            d="M194.8,164.77,323.012,36.555A21.329,21.329,0,0,0,292.848,6.391L164.633,134.606,36.422,6.391A21.329,21.329,0,0,0,6.258,36.555L134.469,164.77,6.258,292.985a21.329,21.329,0,1,0,30.164,30.164L164.633,194.934,292.848,323.149a21.329,21.329,0,0,0,30.164-30.164Zm0,0"
            transform="translate(0 -0.136)"
            fill="#fff"
          />
        </svg>
      </div>
      <div id="content_bh">
        <img
          src="${url}"
          width="150"
          height="150"
        />
        <div id="container_bh">
          <div id="title_bh">
            <h1>${name}</h1>
          </div>
          <div id="desc_bh">
            <h3>
              ${description}
            </h3>
          </div>
          <div class="buttons">
            <button onclick="cancel()">Close</button>
            <button onclick="donate('${website}')">Donate $</button>
          </div>
        </div>
      </div>
    </div>
  `;
    });
};
