class Joke {
  constructor(jokeElement) {
    this.jokeElement = jokeElement;
    this.answerButton = jokeElement.querySelector('.answerButton');
    this.answerButton.textContent = 'Show Answer!';
    this.answerButton.addEventListener('click', () => {
      this.expandJoke();
    })
  }

  expandJoke() {
    this.jokeElement.classList.toggle('joke-open');
  }
}

let jokes = document.querySelectorAll(".joke");

jokes.forEach((jokeElement) => {
  return new Joke(jokeElement);
})
