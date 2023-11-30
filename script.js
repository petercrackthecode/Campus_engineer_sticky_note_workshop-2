// Make an API call to OpenAI to generate text based on the note content
const apiKey = OpenAIApiKey; // Replace with your actual API key

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
};

function getRandomColor() {
  const COLORS = [
    "#a2d1fc", // index: 0
    "#ffc2cd", //        1
    "#97aedc", //        2
    "#d967ae", //        3
    "#b7cf8e", //        4
    "#d5edc2", //        5
  ];

  // return a random color from the COLORS array
  // x * 6 | 0 <= x < 1 -> result will be y
  // where between 0 <= y < 6
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

async function sendNote() {
    /*
    1. take the note from the input box
    2. clear the note from the input box.
    3. add the note at the bottom of our notes list
    */
  const inputElement = document.getElementById("input");
  const noteContent = inputElement.value;
  inputElement.value = "";

  let newNote = document.createElement("li");
  newNote.style = "height: 150px;";
  newNote.style.backgroundColor = getRandomColor();
  newNote.classList.add("container");

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [{role: "assistant", content: `Turn this into a dad joke: ${noteContent}`}],
    max_tokens: 50,
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json();
      const generatedText = result.choices[0].message.content

      // Display the generated text instead of the original note content
      newNote.innerHTML = generatedText;
      let allNotes = document.getElementById("notes");
      allNotes.appendChild(newNote);
    } else {
      console.error('Failed to get response from OpenAI API');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

