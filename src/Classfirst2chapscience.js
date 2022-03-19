import React, { useState } from 'react';
import "./First.css"
const Second= () => {
    const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: 'Animal Around Us',
    content: `

    When we look in our surrounding, we discover different kind of animals.  Animals are found all over the world. They differ in sizes, shapes, color and in kind of places they live in. Animals are living beings and need food, water, and shelter to live.
    
     
    
    Types of animals are:
    
    Wild Animals – Animal that lives in nature / forest (i.e. shelter is not provided by man) and are responsible for getting their own food and water are called wild animal. Some of the wild animal we can see in zoo. Wild animals are fierce and dangerous. Lion is called ‘The king of Jungle’. Example includes foxes, deer, lion, bear, giraffe etc.
    
    
     
    
    
    
    Domestic animal – Those animals that depend on humans for its shelter, food, water, and general care are called domestic animals. Examples include house cats, dogs, parakeets, a cow, horse, sheep, pig etc.
    
     
    
     
    
    Pet animal – Pet animals are domestic animals that are kept for companionship and amusement. Pet animal includes dog, cat, parrot, myna etc.
    
    
     
    
     
    
    Farm animal - Farm animals are the animals that are reared for a purpose that is for their meat, their milk, their hair, or something else. Example includes sheep goat, cow, buffalo etc.
    
    
     
    
    Note: - Whether an animal is domestic or a wild depend on the situation. For example, people domesticate horse and hence it is a domestic animal but horses also found in jungle, hence it is a wild animal.
    
     
    
     
    
    
    
     
    
    Land animals – Animals that live primarily on land is called land animal. Example includes peacock, horse, rhinoceros, elephant, giraffe, buffalo etc.
    
    
    
    
     
    
     
    
    Water animals - Animals that lives in water are called water animal. They have specialized organs called gills, or directly through its skin to breathe in water. Example includes whale, shark, dolphin, seahorse, octopus, fish etc.
    
    
    
     
    
     
    
    Birds - Birds are the animals with feathers, wings and two-legs and a beak without teeth. Most of the birds fly but some birds can swim in water also. For example duck.
    
     
    
     
    
     
    
     
    
    Insects - Animal that has six legs and generally one or two pairs of wings are called insects. Insects are the largest group in the animal kingdom. Example includes lady bird, cockroach, housefly, butterfly, grasshopper etc.
    
     
    
     
    
     
    
    How animal are useful to us?
    
    Animals are useful to us in many ways.
    
    · Many animals such as ox and bullock are used to plough the field.
    
    · Donkey, camel and many other animals are used to carry loads from one place to other especially in villages.
    
    ·  Animals like cows, buffalos, goats provide us milk.
    
    · We get eggs from hen and duck.
    
    · Sheep are reared for wool and silkworm for silk. Woolen clothes that we wear are made of wool. Clothes are also made of silk.
    
    · Animals like dogs guard our houses and are good companion of human beings.`
  };

  const { title, content } = accordionData;
  return(
      <>
      <div className="accordion">
  <div className="accordion-item">
    <div
      className="accordion-title"
      onClick={() => setIsActive(!isActive)}
    >
      <div>{title}</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content">{content}</div>}
  </div>
</div>
<br/>
<a href="https://educationwithfun.com/mod/resource/view.php?id=17"><button style={{background: "lightblue",color: "black"}}className='work'>Worksheet</button></a>
    
      
      </>
  )
}
export default Second