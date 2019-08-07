import MgButton from './src/button'

/*
 @usage:
    <MgButton text="Button_Name"
              type="[none|primary|sucess|danger|warning|info|link]"
              [plain]
              [round]
              [circle]
              [icon="font-awesome-icon-name"]
              @click="handleClick"
              />
*/
MgButton.install = (Vue) => {
  Vue.component(MgButton.name, MgButton)
}

export default MgButton
