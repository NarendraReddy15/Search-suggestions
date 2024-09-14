import React, { useState } from 'react';

const SearchBar = () => {
  // JSON data directly in the component
  const data = [
    {
      "country": "United States",
      "capital": "Washington, D.C.",
      "population": 331002651,
      "official_language": "English",
      "currency": "United States Dollar"
    },
    {
      "country": "Canada",
      "capital": "Ottawa",
      "population": 37742154,
      "official_language": ["English", "French"],
      "currency": "Canadian Dollar"
    },
    {
      "country": "Brazil",
      "capital": "Brasília",
      "population": 212559417,
      "official_language": "Portuguese",
      "currency": "Brazilian Real"
    },
    {
      "country": "United Kingdom",
      "capital": "London",
      "population": 67886011,
      "official_language": "English",
      "currency": "Pound Sterling"
    },
    {
      "country": "Australia",
      "capital": "Canberra",
      "population": 25409800,
      "official_language": "English",
      "currency": "Australian Dollar"
    },
    {
      "country": "Germany",
      "capital": "Berlin",
      "population": 83783942,
      "official_language": "German",
      "currency": "Euro"
    },
    {
      "country": "France",
      "capital": "Paris",
      "population": 65273511,
      "official_language": "French",
      "currency": "Euro"
    },
    {
      "country": "Italy",
      "capital": "Rome",
      "population": 60244639,
      "official_language": "Italian",
      "currency": "Euro"
    },
    {
      "country": "Spain",
      "capital": "Madrid",
      "population": 46754778,
      "official_language": "Spanish",
      "currency": "Euro"
    },
    {
      "country": "Japan",
      "capital": "Tokyo",
      "population": 126476461,
      "official_language": "Japanese",
      "currency": "Japanese Yen"
    },
    {
      "country": "China",
      "capital": "Beijing",
      "population": 1393409038,
      "official_language": "Mandarin",
      "currency": "Renminbi"
    },
    {
      "country": "India",
      "capital": "New Delhi",
      "population": 1380004385,
      "official_language": ["Hindi", "English"],
      "currency": "Indian Rupee"
    },
    {
      "country": "South Africa",
      "capital": "Pretoria",
      "population": 59308690,
      "official_language": ["Zulu", "Xhosa", "Afrikaans", "English"],
      "currency": "South African Rand"
    },
    {
      "country": "Russia",
      "capital": "Moscow",
      "population": 145912025,
      "official_language": "Russian",
      "currency": "Russian Ruble"
    },
    {
      "country": "Mexico",
      "capital": "Mexico City",
      "population": 128932753,
      "official_language": "Spanish",
      "currency": "Mexican Peso"
    },
    {
      "country": "Argentina",
      "capital": "Buenos Aires",
      "population": 45195777,
      "official_language": "Spanish",
      "currency": "Argentine Peso"
    },
    {
      "country": "Chile",
      "capital": "Santiago",
      "population": 19116201,
      "official_language": "Spanish",
      "currency": "Chilean Peso"
    },
    {
      "country": "Colombia",
      "capital": "Bogotá",
      "population": 50882891,
      "official_language": "Spanish",
      "currency": "Colombian Peso"
    },
    {
      "country": "Peru",
      "capital": "Lima",
      "population": 32971854,
      "official_language": ["Spanish", "Quechua", "Aymara"],
      "currency": "Peruvian Sol"
    },
    {
      "country": "Egypt",
      "capital": "Cairo",
      "population": 91250000,
      "official_language": "Arabic",
      "currency": "Egyptian Pound"
    },
    {
      "country": "Turkey",
      "capital": "Ankara",
      "population": 84339067,
      "official_language": "Turkish",
      "currency": "Turkish Lira"
    },
    {
      "country": "Nigeria",
      "capital": "Abuja",
      "population": 206139589,
      "official_language": "English",
      "currency": "Nigerian Naira"
    },
    {
      "country": "Kenya",
      "capital": "Nairobi",
      "population": 53771296,
      "official_language": ["Swahili", "English"],
      "currency": "Kenyan Shilling"
    },
    {
      "country": "Ghana",
      "capital": "Accra",
      "population": 31072940,
      "official_language": "English",
      "currency": "Ghanaian Cedi"
    },
    {
      "country": "South Korea",
      "capital": "Seoul",
      "population": 51269185,
      "official_language": "Korean",
      "currency": "South Korean Won"
    },
    {
      "country": "Thailand",
      "capital": "Bangkok",
      "population": 69799978,
      "official_language": "Thai",
      "currency": "Thai Baht"
    },
    {
      "country": "Malaysia",
      "capital": "Kuala Lumpur",
      "population": 32365999,
      "official_language": "Malay",
      "currency": "Malaysian Ringgit"
    },
    {
      "country": "Vietnam",
      "capital": "Hanoi",
      "population": 97338579,
      "official_language": "Vietnamese",
      "currency": "Vietnamese Dong"
    },
    {
      "country": "Singapore",
      "capital": "Singapore",
      "population": 5850342,
      "official_language": ["English", "Mandarin", "Malay", "Tamil"],
      "currency": "Singapore Dollar"
    },
    {
      "country": "New Zealand",
      "capital": "Wellington",
      "population": 4822233,
      "official_language": ["English", "Māori"],
      "currency": "New Zealand Dollar"
    },
    {
      "country": "Sweden",
      "capital": "Stockholm",
      "population": 10099270,
      "official_language": "Swedish",
      "currency": "Swedish Krona"
    },
    {
      "country": "Norway",
      "capital": "Oslo",
      "population": 5421241,
      "official_language": "Norwegian",
      "currency": "Norwegian Krone"
    },
    {
      "country": "Finland",
      "capital": "Helsinki",
      "population": 5540720,
      "official_language": ["Finnish", "Swedish"],
      "currency": "Euro"
    },
    {
      "country": "Denmark",
      "capital": "Copenhagen",
      "population": 5792202,
      "official_language": "Danish",
      "currency": "Danish Krone"
    },
    {
      "country": "Ireland",
      "capital": "Dublin",
      "population": 4937786,
      "official_language": ["Irish", "English"],
      "currency": "Euro"
    },
    {
      "country": "Belgium",
      "capital": "Brussels",
      "population": 11589623,
      "official_language": ["Dutch", "French", "German"],
      "currency": "Euro"
    },
    {
      "country": "Netherlands",
      "capital": "Amsterdam",
      "population": 17134872,
      "official_language": "Dutch",
      "currency": "Euro"
    },
    {
      "country": "Switzerland",
      "capital": "Bern",
      "population": 8654622,
      "official_language": ["German", "French", "Italian", "Romansh"],
      "currency": "Swiss Franc"
    },
    {
      "country": "Austria",
      "capital": "Vienna",
      "population": 8917205,
      "official_language": "German",
      "currency": "Euro"
    },
    {
      "country": "Poland",
      "capital": "Warsaw",
      "population": 38386000,
      "official_language": "Polish",
      "currency": "Polish Zloty"
    }
  ];

  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    const filtered = data.filter((item) =>
      item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.capital.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search by country or capital..."
          style={{
            padding: '12px 20px',
            width: '600px', // Increased width
            fontSize: '16px',
            borderRadius: '25px', // Rounded corners
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        
        />
        {filteredData.length > 0 && (
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            margin: '10px 0 0',
            border: '1px solid #ccc',
            borderRadius: '25px', // Rounded corners
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {filteredData.map((item) => (
              <li
                key={item.country}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #ccc',
                  backgroundColor: '#f6f6f6',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxSizing: 'border-box'
                }}
              >
                <strong>{item.country}</strong> - {item.capital}
              </li>
            ))}
          </ul>
        )}
        {filteredData.length === 0 && query && (
          <p style={{ color: 'red', marginTop: '10px' }}>No matches found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;/** 
import React, { useState } from 'react';

const SearchBar = () => {
  // Sample data for demonstration
  const countriesData = [
    {
      "country": "United States",
      "capital": "Washington, D.C.",
      "population": 331002651,
      "official_language": "English",
      "currency": "United States Dollar"
    },
    {
      "country": "Canada",
      "capital": "Ottawa",
      "population": 37742154,
      "official_language": ["English", "French"],
      "currency": "Canadian Dollar"
    },
    {
      "country": "Brazil",
      "capital": "Brasília",
      "population": 212559417,
      "official_language": "Portuguese",
      "currency": "Brazilian Real"
    },
    {
      "country": "United Kingdom",
      "capital": "London",
      "population": 67886011,
      "official_language": "English",
      "currency": "Pound Sterling"
    },
    {
      "country": "Australia",
      "capital": "Canberra",
      "population": 25409800,
      "official_language": "English",
      "currency": "Australian Dollar"
    },
    {
      "country": "Germany",
      "capital": "Berlin",
      "population": 83783942,
      "official_language": "German",
      "currency": "Euro"
    },
    {
      "country": "France",
      "capital": "Paris",
      "population": 65273511,
      "official_language": "French",
      "currency": "Euro"
    },
    {
      "country": "Italy",
      "capital": "Rome",
      "population": 60244639,
      "official_language": "Italian",
      "currency": "Euro"
    },
    {
      "country": "Spain",
      "capital": "Madrid",
      "population": 46754778,
      "official_language": "Spanish",
      "currency": "Euro"
    },
    {
      "country": "Japan",
      "capital": "Tokyo",
      "population": 126476461,
      "official_language": "Japanese",
      "currency": "Japanese Yen"
    },
    {
      "country": "China",
      "capital": "Beijing",
      "population": 1393409038,
      "official_language": "Mandarin",
      "currency": "Renminbi"
    },
    {
      "country": "India",
      "capital": "New Delhi",
      "population": 1380004385,
      "official_language": ["Hindi", "English"],
      "currency": "Indian Rupee"
    },
    {
      "country": "South Africa",
      "capital": "Pretoria",
      "population": 59308690,
      "official_language": ["Zulu", "Xhosa", "Afrikaans", "English"],
      "currency": "South African Rand"
    },
    {
      "country": "Russia",
      "capital": "Moscow",
      "population": 145912025,
      "official_language": "Russian",
      "currency": "Russian Ruble"
    },
    {
      "country": "Mexico",
      "capital": "Mexico City",
      "population": 128932753,
      "official_language": "Spanish",
      "currency": "Mexican Peso"
    },
    {
      "country": "Argentina",
      "capital": "Buenos Aires",
      "population": 45195777,
      "official_language": "Spanish",
      "currency": "Argentine Peso"
    },
    {
      "country": "Chile",
      "capital": "Santiago",
      "population": 19116201,
      "official_language": "Spanish",
      "currency": "Chilean Peso"
    },
    {
      "country": "Colombia",
      "capital": "Bogotá",
      "population": 50882891,
      "official_language": "Spanish",
      "currency": "Colombian Peso"
    },
    {
      "country": "Peru",
      "capital": "Lima",
      "population": 32971854,
      "official_language": ["Spanish", "Quechua", "Aymara"],
      "currency": "Peruvian Sol"
    },
    {
      "country": "Egypt",
      "capital": "Cairo",
      "population": 91250000,
      "official_language": "Arabic",
      "currency": "Egyptian Pound"
    },
    {
      "country": "Turkey",
      "capital": "Ankara",
      "population": 84339067,
      "official_language": "Turkish",
      "currency": "Turkish Lira"
    },
    {
      "country": "Nigeria",
      "capital": "Abuja",
      "population": 206139589,
      "official_language": "English",
      "currency": "Nigerian Naira"
    },
    {
      "country": "Kenya",
      "capital": "Nairobi",
      "population": 53771296,
      "official_language": ["Swahili", "English"],
      "currency": "Kenyan Shilling"
    },
    {
      "country": "Ghana",
      "capital": "Accra",
      "population": 31072940,
      "official_language": "English",
      "currency": "Ghanaian Cedi"
    },
    {
      "country": "South Korea",
      "capital": "Seoul",
      "population": 51269185,
      "official_language": "Korean",
      "currency": "South Korean Won"
    },
    {
      "country": "Thailand",
      "capital": "Bangkok",
      "population": 69799978,
      "official_language": "Thai",
      "currency": "Thai Baht"
    },
    {
      "country": "Malaysia",
      "capital": "Kuala Lumpur",
      "population": 32365999,
      "official_language": "Malay",
      "currency": "Malaysian Ringgit"
    },
    {
      "country": "Vietnam",
      "capital": "Hanoi",
      "population": 97338579,
      "official_language": "Vietnamese",
      "currency": "Vietnamese Dong"
    },
    {
      "country": "Singapore",
      "capital": "Singapore",
      "population": 5850342,
      "official_language": ["English", "Mandarin", "Malay", "Tamil"],
      "currency": "Singapore Dollar"
    },
    {
      "country": "New Zealand",
      "capital": "Wellington",
      "population": 4822233,
      "official_language": ["English", "Māori"],
      "currency": "New Zealand Dollar"
    },
    {
      "country": "Sweden",
      "capital": "Stockholm",
      "population": 10099270,
      "official_language": "Swedish",
      "currency": "Swedish Krona"
    },
    {
      "country": "Norway",
      "capital": "Oslo",
      "population": 5421241,
      "official_language": "Norwegian",
      "currency": "Norwegian Krone"
    },
    {
      "country": "Finland",
      "capital": "Helsinki",
      "population": 5540720,
      "official_language": ["Finnish", "Swedish"],
      "currency": "Euro"
    },
    {
      "country": "Denmark",
      "capital": "Copenhagen",
      "population": 5792202,
      "official_language": "Danish",
      "currency": "Danish Krone"
    },
    {
      "country": "Ireland",
      "capital": "Dublin",
      "population": 4937786,
      "official_language": ["Irish", "English"],
      "currency": "Euro"
    },
    {
      "country": "Belgium",
      "capital": "Brussels",
      "population": 11589623,
      "official_language": ["Dutch", "French", "German"],
      "currency": "Euro"
    },
    {
      "country": "Netherlands",
      "capital": "Amsterdam",
      "population": 17134872,
      "official_language": "Dutch",
      "currency": "Euro"
    },
    {
      "country": "Switzerland",
      "capital": "Bern",
      "population": 8654622,
      "official_language": ["German", "French", "Italian", "Romansh"],
      "currency": "Swiss Franc"
    },
    {
      "country": "Austria",
      "capital": "Vienna",
      "population": 8917205,
      "official_language": "German",
      "currency": "Euro"
    },
    {
      "country": "Poland",
      "capital": "Warsaw",
      "population": 38386000,
      "official_language": "Polish",
      "currency": "Polish Zloty"
    }
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setResults([]);
      return;
    }

    const filteredResults = countriesData.filter((entry) =>
      entry.country.toLowerCase().includes(term.toLowerCase()) ||
      entry.capital.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for a country or capital..."
          style={{
            padding: '12px 20px',
            width: '400px',
            fontSize: '16px',
            borderRadius: '25px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
        {results.length > 0 && (
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            margin: '10px 0 0',
            border: '1px solid #ddd',
            borderRadius: '25px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {results.map((item) => (
              <li
                key={item.country}
                style={{
                  padding: '12px 20px',
                  borderBottom: '1px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  cursor: 'pointer',
                  textAlign: 'left',
                  borderRadius: '25px',
                  marginBottom: '-1px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  color: '#333',
                }}>
                  {item.country}
                </span>
                <span style={{
                  padding: '10px',
                  borderBottom: '1px solid #ccc',
                  backgroundColor: '#f6f6f6',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxSizing: 'border-box'
                }}>
                  - {item.capital}
                </span>
              </li>
            ))}
          </ul>
        )}
        {results.length === 0 && searchTerm && (
          <p style={{ color: 'red', marginTop: '10px' }}>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
**/
