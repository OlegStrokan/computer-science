import { Add } from "../src/add";

test('should stage a file into db-test', () => {
  const add = new Add(`${__dirname}/test-file.txt`)
  const result = add.stageFile(`${__dirname}/test-file.txt`)
  expect(result).toBeTruthy();
  expect(add.stageFile()).toEqual(`${__dirname}/test-file.txt`)
})

test('should not stage a file because it doest not exists', () => {
  const add = new Add(`${__dirname}/db-test.txt`)
  const result = add.stageFile(`${__dirname}/test-file.xt`)
  expect(result).toBeFalsy();
}
