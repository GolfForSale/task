import React from 'react';
import './styles.css';

const mockedResults = [
  { title: 'GoogleGitHub: Lets build from here · GitHub', url: 'https://example.com/result1', description: 'g Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model te'},
  { title: 'GitHub (@github) · Twitter', url: 'https://example.com/result2', description: 'ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'},
  { title: 'What Is GitHub? A Beginners Introduction to GitHub', url: 'https://example.com/result3', description: ' fessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very po' },
  { title: 'WAMAZON? A Beginners Introduction to AMAZON', url: 'https://example.com/result3', description: 'our, or randomised words which dk even slightly believable. If you are going to use a passage of Lorem Ipsum, you ng embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a' },
  { title: 'aws? asdadsaroduction to aws', url: 'https://example.com/result3',description: 'g Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to ug it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for '},
  { title: 'What Ition to google', url: 'https://example.com/result3', description: ' randomised words which dk even slightly believable. If you are going to use a passage of Lorem Ipsum, you ng embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a' },
]

const ResultsList = ({query}) => {
  const filteredData = mockedResults.filter((result) => result.title.toLocaleLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <main className="search-results">
        {filteredData.map((result, index) => (
          <div className="search-result" key={index}>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
            <p>{result.description}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default ResultsList;
   