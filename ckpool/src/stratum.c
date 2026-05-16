// Patched CKPool-DGB stratum.c for SHA256d difficulty
// Eduard deterministic patch — forces correct DigiByte SHA256d difficulty

#include "ckpool.h"
#include "stratum.h"
#include "json.h"

// ... your existing includes remain unchanged ...

double get_dgb_sha256d_diff(json_t *json)
{
    json_t *difficulties = json_get_object(json, "difficulties");
    if (!difficulties) {
        // fallback to old behavior if field missing
        return json_get_double(json, "difficulty");
    }
    return json_get_double(difficulties, "sha256d");
}

// Replace the original difficulty assignment inside block template parsing
// This is the patched block template handler
void stratum_set_block_template(stratum_instance_t *si, json_t *json)
{
    // existing CKPool code above this stays unchanged

    // PATCHED LINE:
    si->block.difficulty = get_dgb_sha256d_diff(json);

    // existing CKPool code below this stays unchanged
}
