{
  "targets": [
    {
      "actions+": [
        {
          "action_name": "building",
          "inputs": [
            ""
          ],
          "outputs": [
            ""
          ],
          "action": [
            "bash",
            "-c",
            "cd ./src/cityhash && ./configure && sudo make install"
          ]
        }
      ],
      "target_name": "cityhash",
      "include_dirs": [
        "./src/cityhash"
      ],
      "sources": [
        "./src/binding.cc",
        "./src/cityhash/src/city.cc"
      ]
    }
  ]
}