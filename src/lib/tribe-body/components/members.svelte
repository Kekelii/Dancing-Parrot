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
    name:'Christopher Kuetsinya',
    facebook:'false',
    instagram:'https://www.instagram.com/chris_kuetsinya/  ',
    twitter:'https://twitter.com/chris_kuet',
    linkedIn:'false',
    image:'Christopher Kuetsinya.jpeg'
  },
  {
    name:'Kwesi Frost',
    facebook:'false',
    instagram:'https://www.instagram.com/gbemi_ts3/',
    twitter:'https://twitter.com/Manst3Frost',
    linkedIn:'false',
    image:'Kwesi Frost.jpeg'
  },
  {
    name:'Jane Cecil Dadzie',
    facebook:'false',
    instagram:'https://instagram.com/janececildadzie?igshid=YmMyMTA2M2Y=',
    twitter:'false',
    linkedIn:'false',
    image:'Jane Cecil Dadzie.jpeg'
  },
  {
    name:'Dyna Frimpong',
    facebook:'https://www.facebook.com/diana.b.frimpong?mibextid=LQQJ4d  ',
    instagram:'https://www.instagram.com/__efya__/ ',
    twitter:'https://twitter.com/Diana_BF',
    linkedIn:'https://www.linkedin.com/in/diana-botchway-frimpong-590097116',
    image:'Dyna Frimpong.jpeg'
  },
  {
    name:'Priscilla Loh',
    facebook:'false ',
    instagram:'https://instagram.com/_cillah_?igshid=YmMyMTA2M2Y=',
    twitter:'https://twitter.com/_cillah_?s=21&t=68yqI-s1EJqYNve7l6LoaQ',
    linkedIn:'false',
    image:'Priscilla Loh.jpeg',
   
  },
  {
    name:' Richard NAG Agyemang',
    facebook:'https://www.facebook.com/richard.osafoagyeman  ',
    instagram:'https://instagram.com/nagwear?igshid=YmMyMTA2M2Y=',
    twitter:'https://twitter.com/_cillah_?s=21&t=68yqI-s1EJqYNve7l6LoaQ',
    linkedIn:'false',
    image:'Richard NAG Agyemang.jpeg',
 
  },
]

</script>
<div class=" justify-evenly  gap-10 p-0 container mx-auto mt-20 flex flex-wrap  md:p-10 md:justify-start md:gap-4 ">
  {#each memberList as member }
  <Member memberData = {member}/>
  {/each}
</div>
