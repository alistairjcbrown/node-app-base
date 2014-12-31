##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJUpDpBAAoJEJEOHi8Q7zzzddYIAIMnU/NBR7/AvOsLB4s+m/7J
UAYx+sRk/9WYarTreIeNbYMRMzsJt0TEXstDW3SmxuKqSO18CPu+jmAPBrqEZV5e
ff47rA6jELlE7IkaIweVupKvWZVqQDg19Exszk0t4cY6SmV/gaSiXjgaeK2yCJqe
umQkPdgDAmfcIJBFVrsi0g9FeaGiVoG3PXsLtsBNZBzXbkq28u2kgs10pfZZN2+f
inA/sp4mZYh3vy7RoYArmlIYvxRgdi3qjyGnI+dBwmgNQIUMJNeZTv7j4Ch/Z48E
iWMZq6p/gZx2vWDn2bto5TN8Z57vNCVUDH613RM9B97cakV+VPl0OCWXLKUDgXU=
=Qn3Y
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file                           contents                                                        
            ./                                                                                             
27            .gitignore                   403de3e1c73edcfaa2f46ff6146f414ddcaeed97717a02af53733b31c2dec963
125           .travis.yml                  dc0aebfa2af0cda0911aeb83f023797c055fc2e705f0dadcb9bc6d8493e860ad
1927          Gruntfile.js                 5d0f065f72236840bf202e58b9d081560a6622f29777d8f0a77f747d4eac5ae1
1082          LICENSE                      a5d167a6021c287a5f5a609e57bf87fbeebdc132a8837b62f147eef2bfc29b0d
1141          README.md                    a2f787bcae8042fa5d5d50c53798cb7c736baaf7fd876b745bd190a7ca3ea8d9
              config/                                                                                      
5               app.json                   8e1d794b49e35ea828279c6a8c95282bbb9a0787cf5c9385256c2cc9d17baeb7
386             jscs.json                  375a3f95f4b5a001c957a21e9550d244a22b27f81ce44e809567eada96fca805
975             jshint.json                17f9d9d39a906cd3beba0c1f35b65d46d6efac1c685316ae5069248b2f91e8b1
533             requirejs.json             6530bafd9f3c0a3df27b71f02a37a700c32791e29590b935281ffbc38464c132
389           index.js                     0876663173df2507b528bae0ae3743f98804ae8a81eb8c68707800690182d3f1
1029          package.json                 7f21035bb8b7e2b1e2b705f5b502b991ae4138daa5bfc72ff5bb6958592a3a34
              src/                                                                                         
111             README.md                  7b1b44318066880ada5881989046116beac4adcf6953141109992573fd66e684
273             app.js                     f9bb73efbdd9a9c9123dfd63b1c9c190b9356e44af5ed1dc27ecb2bfc1f41789
                lib/                                                                                       
                  application-dependency/                                                                  
281                 README.md              c576550adf2c12430ef263f3de66d1436ec1d39846a7c1a42f9f6ee21886a213
629                 index.js               6b955099a0feb4c02591dddd380dde1b18b496b5a51d536ae366ba250fbd9963
                    tests/                                                                                 
2708                  index.test.js        433468df4f7406cec2e3315473bf3e27351b183b6d2f05c9486e794f5298cfd6
                tests/                                                                                     
                  mocks/                                                                                   
273                 pubsub.js              1b782b73e4b8a9c2b42c045528a2a1a1052cf61920e36cc936e0e592bd5bf95d
608               runner.js                b496a99548a4d7004179fc96533fcb0ae82e6d2991ad3dd11511b7745d7eb37d
971               test-environment.js      5a25cb2e15cfcf6a0cdd6640dc5bd72a5b0b961b80623ab7e8f4941c34ea6d9c
                utils/                                                                                     
169               check.js                 97aee6dc4292cbfe0ab131646b74c6bd202566fd19a0e294d386fcd94cb74e89
292               config.js                1d983a5cba047eb268c2e1739a5575784e6d52c586bc2e9b106aff39cc3f16b3
150               pubsub.js                2be01886ec867b47106eb7957d8165ac0bff543a7fe16c56c126ff0c9687d146
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing