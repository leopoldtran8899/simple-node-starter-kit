
export default () => {
  const testEnv = process.env.app__TEST_VAR
  console.log('Init services ', testEnv)
}
