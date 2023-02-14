<script>
  import Member from "./member.svelte";
  let memberList = [{
    name:'Kwadwo Poku-Agyemang',
    facebook:'https://www.facebook.com/kwadwo.pokuagyemang',
    instagram:'https://www.instagram.com/quajjo/',
    twitter:'https://twitter.com/just_quajjo',
    linkedIn:'false',
    image:'Kwadwo Poku-Agyemang.jpeg'
  },
  {
    name:'Efia yeboah',
    facebook:'false',
    instagram:'https://instagram.com/miss_afia_yeboah?igshid=YmMyMTA2M2Y=',
    twitter:'https://twitter.com/ephyaboo',
    linkedIn:'false',
    image:'Efia yeboah.jpeg'
  },
  {
    name:'unknown',
    facebook:'false',
    instagram:'https://www.instagram.com/chris_kuetsinya/  ',
    twitter:'https://twitter.com/chris_kuet',
    linkedIn:'false',
    image:'member1.jpeg'
  },
  {
    name:'unknown',
    facebook:'false',
    instagram:'https://www.instagram.com/gbemi_ts3/',
    twitter:'https://twitter.com/Manst3Frost',
    linkedIn:'false',
    image:'member2.jpeg'
  },
  {
    name:'unknown',
    facebook:'false',
    instagram:'https://instagram.com/janececildadzie?igshid=YmMyMTA2M2Y=',
    twitter:'false',
    linkedIn:'false',
    image:'member3.jpeg'
  },
  {
    name:'unknown',
    facebook:'https://www.facebook.com/diana.b.frimpong?mibextid=LQQJ4d  ',
    instagram:'https://www.instagram.com/__efya__/ ',
    twitter:'https://twitter.com/Diana_BF',
    linkedIn:'https://www.linkedin.com/in/diana-botchway-frimpong-590097116',
    image:'member4.jpeg'
  },
  {
    name:'unknown',
    facebook:'false ',
    instagram:'https://instagram.com/_cillah_?igshid=YmMyMTA2M2Y=',
    twitter:'https://twitter.com/_cillah_?s=21&t=68yqI-s1EJqYNve7l6LoaQ',
    linkedIn:'false',
    image:'member5.jpeg'
  },
]

</script>
<div class=" justify-around container mx-auto mt-20 flex flex-wrap gap-4 md:p-10 md:justify-evenly">
  {#each memberList as member }
  <Member memberData = {member}/>
  {/each}
 


</div>
