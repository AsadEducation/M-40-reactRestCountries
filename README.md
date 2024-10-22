![alt text](image.png)

![alt text](image-1.png)

<h1>How Flag are going to be added </h1>

<ol>
    <li>Create a Button and Put onClick()</li>
    <li>Wrap it with another function because we have to pass img url</li>
    <li>write the handleFlagClicked function in the component</li>
    <li>where you will pass the flag url , you have to create a function in parent component</li>
    <li>Created a visitedFlag Function in parent component </li>
    <li>But child doesnot know what is vistedFlag()</li>
    <li>so we have to pass it as props within the child </li>
    <li>child will recieve the VistedFlag() and can set the value</li>
    <li>passed the url via visitedFlag from child</li>
    <li>Recieved it in parents visitedFlag</li>
    <li>Now we have to declare a state to notify react</li>
    <li>  const [flags, setFlags] = useState([]);</li>
    <li>Here flag is array , so putting flagUrls in flags</li>
    <li><div>
        const newFlags = [...flags, flagUrl];
        setFlags(newFlags);
    </div></li>
    flags.map((flag,index) => {
     return <img key={index} src={flag} alt="" />
    })
    
                        
                    
</ol>