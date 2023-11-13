import React from 'react';
import '../css/paragraph.css' 

const Paragraph = () => {
  return (
    <div>
    <div className="centered-paragraph">
      <h2>
        <span className="different-color">W</span>elcome to Check People Leads
      </h2>
    </div>
    <div className="paragraph">
      <p>
        We are your premier online source of public information for people in the U.S. And, best of all, we are able to provide that information for FREE!
      </p>
      <p>
        Search People FREE allows you a variety of ways to find information about someone. If you have a person's name and a city and state where they've lived, you can enter it into our People Search fields above. To help you confirm that a person is actually the one you're looking for, our results include a variety of identifying information, such as the person's:
      </p>
      <ul>
        <li>Full name</li>
        <li>Age</li>
        <li>Current and former addresses</li>
        <li>Current and former phone numbers</li>
        <li>Likely relatives and associates</li>
        <li>Corporations or businesses with which they're associated</li>
      </ul>
      <p>Once you've found the right person, just click on “More Free Details" to reveal even more in-depth public data about him or her. From there, you also have the option to access the person's full background report (which could reveal deeper public records information, such as criminal records, bankruptcies, foreclosures, etc.).</p>
    </div>
    <div className="centered-paragraph">
      <h2>
        <span className="different-color">M</span>ore Ways to Find People
      </h2>
    </div>
    <div className='paragraph'>
    <p>Instead of a name, maybe all you have is a phone number, address, or email address. At Search People FREE, you can look up such pieces of contact information to try and locate the person or people associated with them. And that information doesn't necessarily have to be current, either, for our search to work.</p>
    <p>With our Reverse Phone Lookup, Address Lookup, and Email Lookup, simply enter a complete phone number, address, or email address into their respective search fields. Even if someone hasn't lived at a certain address for years, or the phone number you have is long since disconnected, that information should still be linked to one or more people.</p>
    <p>With our Reverse Phone Lookup, Address Lookup, and Email Lookup, simply enter a complete phone number, address, or email address into their respective search fields. Even if someone hasn't lived at a certain address for years, or the phone number you have is long since disconnected, that information should still be linked to one or more people.</p>
    <p>Whether you start with old or new contact information, the search results at Search People FREE will reveal public information that tells you more about who a person is, where they've been, and options for contacting them today.</p>
    <p>Don't have all the information needed to start a direct search for someone? You can still start investigating by browsing through our Name Directory, starting either with a list of popular last names or last names starting with A-Z.</p>
    </div>
    </div>
  );
};

export default Paragraph;