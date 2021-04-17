// Append css file to head content

function donate() {
  console.log("donate");
}

function cancel() {
  document.getElementById("charity_bh").remove();
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

window.onload = function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const cssLink = "http://localhost:3000/overlay.css";
  const head = document.getElementsByTagName("head")[0];

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = cssLink;
  link.media = "all";
  head.appendChild(link);

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
    <div id="title_bh">
      <h1>Haakathon Charity</h1>
    </div>
    <div id="desc_bh">
      <h3>
        Donate to poor and single techies in bangalore by pressing donate
        button
      </h3>
    </div>
    <div class="buttons">
      <button onclick="cancel()">Close</button>
      <button onclick="donate()">Donate $</button>
    </div>
  </div>
  </div>
  `;
};
