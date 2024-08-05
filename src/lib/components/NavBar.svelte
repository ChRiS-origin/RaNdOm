<script>
    import DarkModeSwitch from "./DarkModeSwitch.svelte";
    import ModeSwitch from "./ModeSwitch.svelte";
    import { assets } from '$app/paths';
</script>

<nav>
    <ul class="flex-container">
      <li class="flex-item">
          <img id="dark-random-icon" class="hidden transition ease-in-out duration-300" src="{assets}/button-rand.png" alt="Random">
          <img id="light-random-icon" class="transition ease-in-out duration-300" src="{assets}/silverbutton-rand.png"  alt="Random">
      </li>
      <li class="flex-item">
          <ModeSwitch/>
      </li>
      <li class="flex-item">
          <DarkModeSwitch/>
      </li>
    </ul>
</nav>

<style>

    nav{
        font-size: 1rem;
        line-height: 2rem;
    }

    .flex-container{
      display: flex;
      flex-flow: row;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      margin-top: -35px;
      
      list-style: none;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.463);
    }

    .flex-item{
        height: 100%;
        padding: 5px;
        width: 200px;
        margin-top: 10px;
        margin-bottom: -30px;
        line-height: 120px;
        font-weight: bold;
        font-size: 1.5em;
        text-align: center;
    }

    img{
        margin-top: 35px;
        margin-left: 2.5rem;
        max-width: 48px;
        max-height: 48px;
        }

    /* @media(max-width: 589px){
        img{
          margin-left: 4.2rem;
        }
    } 

    @media(max-width: 560px){
        img{
          margin-left: 3.9rem;
        }
    } 

    @media(max-width: 520px){
        img{
          margin-left: 3.7rem;
        }
    } 

    @media(max-width: 500px){
        img{
          margin-left: 3.5rem;
        }
    } 

    @media(max-width: 460px){ 
        img{
          margin-left: 1.9em;
        }
    } 


    @media(max-width: 415px){ 
        img{
          margin-left: 1.8em;
        }
    } 

    @media(max-width: 412px){ 
        img{
          margin-left: 1.7em;
        }
    } 

    @media(max-width: 390px){ 
        img{
          margin-left: 1.6em;
        }
    } 

    @media(max-width: 385px){ 
        img{
          margin-left: 2rem;
        }
    }  */

    @media(max-width: 375px){ 
        nav{
          font-size: 0.9rem;
          line-height: 2rem;
        }
    } 

    /* @media(max-width: 360px){ 
        img{
          margin-left: 1.4em;
        }
    }  */
</style>



