# This function is now run ONCE for EACH boost the player has chosen.
# The arguments are: 
# $1 = UUID
# $2 = Attribute ID (e.g., generic.max_health)
# $3 = Value
# $4 = adding function: (add, multiply_base, multiply)
attribute @s $2 modifier add $1 MODPACK_BOOST $3 $4