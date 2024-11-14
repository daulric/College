
package.path = package.path .. ";./modules/?.lua"
local SequenceAlgorithm = require("modules.sequence")

local sequence, elements = SequenceAlgorithm.GetSequence({2, 5, 8, 11});
local element = SequenceAlgorithm.GetPositionSequence(20, sequence, elements);

print(element);