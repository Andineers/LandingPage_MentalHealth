// Fungsi untuk mengambil data dari form
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  return (
    formData &&
    formData.name &&
    formData.city &&
    formData.email &&
    isNumber(formData.zipCode) &&
    formData.status
  );
}

function isNumber(value) {
  return !isNaN(value);
}

function submit(event) {
  event.preventDefault();

  const formData = handleGetFormData(); // Fungsi untuk mengambil data dari form
  function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
      name,
      city,
      email,
      zipCode,
      status,
    };
  }

  function isNumber(string) {
    return !isNaN(string);
  }

  function checkboxIsChecked() {
    return document.getElementById("status").checked;
  }

  function validateFormData(formData) {
    const { name, city, email, zipCode, status } = formData;
    if (typeof formData == "object" && typeof zipCode == "number" && status) {
      return true;
    } else {
      return false;
    }
  }

  function isNumber(value) {
    return !isNaN(value);
  }

  function submit(event) {
    event.preventDefault();

    const { name, city, email, zipCode, status } = handleGetFormData();

    if (
      !validateFormData({
        name,
        city,
        email,
        zipCode,
        status,
      })
    ) {
      document.getElementById("warning").innerText =
        "Periksa form anda sekali lagi";
    } else {
      document.getElementById("warning").innerText = "";
    }
  }

  document.getElementById("form").addEventListener("submit", submit);

  if (!validateFormData(formData)) {
    document.getElementById("warning").innerText =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").innerText = "";
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = handleGetFormData();

  if (!validateFormData(formData)) {
    document.getElementById("warning").innerText =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").innerText = "";
  }
});
const form = document.getElementById("form");
console.log(form);
