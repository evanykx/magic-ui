<template>
  <div class="hello">
    <div>
    <MgButton />
    <MgButton type="primary" icon="home"/>
    <MgButton type="success" text="按钮"/>
    <MgButton type="danger"/>
    <MgButton type="warning"/>
    <MgButton type="info"/>
    <MgButton type="link"/>
    </div>
    <div>
    <MgButton round/>
    <MgButton round type="primary"/>
    <MgButton round icon="home" type="success"/>
    <MgButton round type="danger"/>
    <MgButton round type="warning"/>
    <MgButton round type="info"/>
    <MgButton round type="link"/>
    </div>
    <div>
    <MgButton />
    <MgButton circle icon="home" type="primary"/>
    <MgButton circle icon="home" type="success"/>
    <MgButton circle icon="home" type="danger"/>
    <MgButton circle icon="home" type="warning"/>
    <MgButton circle icon="home" type="info"/>
    <MgButton circle icon="home" type="link"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onClick: (evt) => {
      console.log(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    margin-top: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
